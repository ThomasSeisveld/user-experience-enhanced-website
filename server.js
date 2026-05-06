import express from 'express'
import dotenv from 'dotenv'
import { Liquid } from 'liquidjs';
dotenv.config();

const app = express()

const sessions = new Map();

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

async function reqDATA(endpoint, params = {}) {
  const url = 'https://fdnd-agency.directus.app/items/' + endpoint + '?' + new URLSearchParams(params);
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

app.get('/', async function (request, response) {
  response.render('index.liquid', { title: 'Home', menuClass: 'home' });
});

app.get('/instruments', async function (request, response) {
  const currentInstrument = request.query.instrument || '';
  const currentStatus = request.query.status || '';
  const limitParam = request.query.limit || '10';
  const showAll = limitParam === 'all';
  const parsedLimit = Number(limitParam);
  const limit = !showAll && Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 10;

  const allInstruments = await reqDATA('preludefonds_instruments');
  const instrumentOptions = [...new Set(allInstruments.map((item) => item.instrument).filter(Boolean))]
    .sort((left, right) => left.localeCompare(right, 'nl'));

  const statusOptions = ['Beschikbaar', 'Uitgeleend', 'Beschadigd', 'Onder onderhoud'];

  const filteredInstruments = allInstruments.filter((item) => {
    const instrumentMatch = currentInstrument ? item.instrument === currentInstrument : true;
    const statusMatch = currentStatus ? item.status === currentStatus : true;
    return instrumentMatch && statusMatch;
  });

  const visibleInstruments = [...filteredInstruments].sort((left, right) =>
    (left.name || '').localeCompare(right.name || '', 'nl')
  );

  const instruments = showAll ? visibleInstruments : visibleInstruments.slice(0, limit);
  const hasMore = !showAll && visibleInstruments.length > limit;
  const totalCount = visibleInstruments.length;

  response.render('overzicht.liquid', {
    instruments,
    menuClass: 'overzicht',
    hasMore,
    totalCount,
    instrumentOptions,
    statusOptions,
    currentInstrument,
    currentStatus,
    currentLimit: showAll ? 'all' : String(limit)
  });
});

app.get('/instruments/:key', async function (request, response) {
  const instruments = await reqDATA('preludefonds_instruments', { 'filter[key][_eq]': request.params.key });
  const instrument = instruments[0];
  response.render('informatie.liquid',  { instrument, menuClass: 'overzicht' });
});

app.get('/admin/login', async function (request, response) {
  response.render('admin-login.liquid', { title: 'Admin Login', menuClass: 'portal' });
});

app.post('/admin/login', async function (request, response) {
  const password = request.body.password;
  const correctPassword = process.env.TEACHER_PASSWORD;

  if (!correctPassword) {
    return response.render('admin-login.liquid', { 
      error: 'Serverconfiguratie fout: wachtwoord niet ingesteld',
      title: 'Admin Login',
      menuClass: 'portal'
    });
  }

  if (password === correctPassword) {
    const sessionId = Math.random().toString(36).substring(2, 15);
    sessions.set(sessionId, { adminAuthenticated: true, createdAt: Date.now() });
    response.setHeader('Set-Cookie', `sessionId=${sessionId}; Max-Age=3600; Path=/; HttpOnly`);
    response.redirect(303, '/admin/panel');
  } else {
    response.render('admin-login.liquid', { 
      error: 'Onjuist wachtwoord',
      title: 'Admin Login',
      menuClass: 'portal'
    });
  }
});

function checkAdminAuth(request, response, next) {
  const sessionId = request.headers.cookie?.split('sessionId=')[1]?.split(';')[0];
  if (sessionId && sessions.has(sessionId) && sessions.get(sessionId).adminAuthenticated) {
    next();
  } else {
    response.redirect(303, '/admin/login');
  }
}

app.get('/admin/panel', checkAdminAuth, async function (request, response) {
  const allInstruments = await reqDATA('preludefonds_instruments');
  const statusOptions = ['Beschikbaar', 'Uitgeleend', 'Beschadigd', 'Onder onderhoud'];
  let selectedInstrument = null;
  const instrumentKey = request.query.instrument;
  
  if (instrumentKey) {
    selectedInstrument = allInstruments.find(inst => inst.key === instrumentKey);
  }
  
  response.render('admin-panel.liquid', { 
    title: 'Instrument Management Panel',
    menuClass: 'portal',
    instruments: allInstruments,
    statusOptions: statusOptions,
    selectedInstrument: selectedInstrument
  });
});

app.post('/admin/update-instrument', checkAdminAuth, async function (request, response) {
  const { key, status } = request.body;
  
  if (!key || !status) {
    return response.status(400).json({ success: false, message: 'Key en status zijn verplicht' });
  }

  try {
    const instruments = await reqDATA('preludefonds_instruments', { 'filter[key][_eq]': key });
    
    if (!instruments || instruments.length === 0) {
      return response.status(404).json({ success: false, message: 'Instrument niet gevonden' });
    }

    const instrumentId = instruments[0].id;
    const updateUrl = `https://fdnd-agency.directus.app/items/preludefonds_instruments/${instrumentId}`;
    const updateResponse = await fetch(updateUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: status })
    });

    if (!updateResponse.ok) {
      return response.status(500).json({ success: false, message: 'Fout bij update naar database' });
    }

    response.redirect(303, `/admin/panel?instrument=${encodeURIComponent(key)}`);
  } catch (error) {
    console.error('Error updating instrument:', error);
    response.status(500).json({ success: false, message: 'Server fout' });
  }
});

app.use(function (request, response) {
  response.status(404).render('404.liquid')
})

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})