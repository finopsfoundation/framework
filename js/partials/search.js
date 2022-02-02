const searchClient = algoliasearch('64LMXTN0XN', '3b7af83f7cdd87204a4c8412426bd278');

// Capability page
if(document.getElementById('capability-hits')) {

  const capability_search = instantsearch({
    indexName: 'prod_capabilities',
    searchClient,
  });

  capability_search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#capability-search',
    }),

    instantsearch.widgets.hits({
      container: '#capability-hits',
      templates: {
        item: `
          <a class="m-0 p-6 block h-full bg-white border-solid border-gray-200 border rounded-sm shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
            <h2 class="text-lg font-medium mt-0 mb-2">{{ meta_title }}</h2>
            {{#label}}
            <span class="text-white font-medium bg-green-500 rounded-md py-1 px-2 inline-block uppercase text-xs leading-tight">{{ label }}</span>
            {{/label}}
            <p class="block text-gray-600 text-sm leading-relaxed mb-2"">{{ meta_desc }}</p>
            <span class="text-gray-600 hover:text-green-500 text-sm leading-relaxed underline">Read more</span>
          </a>
        `,
      },
    })
  ]);

  capability_search.start();

}

// Events page
if(document.getElementById('event-hits')) {

  const event_search = instantsearch({
    indexName: 'prod_events',
    searchClient,
  });

  event_search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 12,
    }),

    instantsearch.widgets.searchBox({
      container: '#event-search',
    }),

    instantsearch.widgets.refinementList({
      container: '#event-type',
      attribute: 'type',
    }),

    instantsearch.widgets.refinementList({
      container: '#event-label',
      attribute: 'label',
    }),

    instantsearch.widgets.hits({
      container: '#event-hits',
      templates: {
        item: `
         <div>
          <a class="flex text-centre items-center justify-center m-0 bg-white border-solid border-gray-200 border rounded-sm shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}" data-ga-category="links" data-ga-action="internal link clicks" data-ga-label="events - {{ meta_title }} {{ event.host }}">
            <img src="/img/events/{{ image }}" alt="{{ meta_title }}" width="100" />
            <div class="py-2 px-4 flex-grow">
              <h2 class="text-base font-medium mt-0 mb-2 leading-tight">{{ meta_title }}</h2>
              <p class="text-xs leading-tight m-0">{{ date }} - {{ location }}</p>
              <p class="text-xs leading-tight m-0">Hosted by: {{ host }}</p>
            </div>
          </a>
        </div>
        `,
      },
    }),

    instantsearch.widgets.pagination({
      container: '#pagination',
    }),

  ]);

  event_search.start();

}

// Resources page
if(document.getElementById('resources-hits_capability')) {

  const search = instantsearch({
    indexName: 'prod_capabilities',
    searchClient,
  });

  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 3,
    }),

    instantsearch.widgets.searchBox({
      container: '#resources-search',
    }),

    instantsearch.widgets.hits({
      container: '#resources-hits_capability',
      templates: {
        item:
          `
            <a class="m-0 p-4 block h-full bg-white border-solid border-gray-200 border border-l-4 border-l-purple rounded-sm shadow-sm hover:border-purple cursor-pointer transition duration-200" href="{{ url }}">
              <h2 class="text-lg font-medium mt-0 mb-2">{{ meta_title }}</h2>
            </a>
          `,
      },
    }),

    instantsearch.widgets
      .index({ indexName: 'prod_stories' })
      .addWidgets([
        instantsearch.widgets.configure({
          hitsPerPage: 3,
        }),

        instantsearch.widgets.hits({
          container: '#resources-hits_stories',
          templates: {
            item: `
            <a class="m-0 p-4 block h-full bg-white border-solid border-gray-200 border border-l-4 border-l-blue rounded-sm shadow-sm hover:border-blue cursor-pointer transition duration-200" href="{{ url }}">
              <h2 class="text-lg font-medium mt-0 mb-2">{{ meta_title }}</h2>
            </a>
          `,
          },
        }),
      ]),

    instantsearch.widgets
      .index({ indexName: 'prod_resources' })
      .addWidgets([
        instantsearch.widgets.configure({
          hitsPerPage: 6,
        }),

        instantsearch.widgets.hits({
          container: '#resources-hits_resources',
          templates: {
            item:  `
             <a class="h-full flex text-centre bg-gray-200 items-center justify-center m-0 w-full bg-white border-solid border-gray-200 border rounded-sm shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
              <img src="https://via.placeholder.com/100x100.png" />
              <div class="py-2 px-4">
                <h2 class="text-base font-medium mt-0 mb-2">{{#helpers.snippet}}{ "attribute": "meta_title" }{{/helpers.snippet}}</h2>
                {{#label}}
                <span class="text-white font-medium bg-green-500 rounded-md py-1 px-2 inline-block uppercase text-xs leading-tight">{{ label }}</span>
                {{/label}}
              </div>
            </a>
          `,
          },
        }),
      ]),

      instantsearch.widgets
      .index({ indexName: 'prod_tooling_services' })
      .addWidgets([
        instantsearch.widgets.configure({
          hitsPerPage: 6,
        }),

        instantsearch.widgets.hits({
          container: '#resources-hits_tooling',
          templates: {
            item:  `
            <a class="h-full flex text-centre items-center justify-center m-0 p-6 w-full bg-white border-solid border-gray-200 border rounded-sm shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
              <img src="{{ logo-url }}" alt="{{ name }}" width="170" />
              <h2 class="text-lg font-medium mt-0 mb-2">{{ logo }}</h2>
            </a>
          `,
          },
        }),
      ]),

  ]);

  search.start();

}

// Resource Library Page
if(document.getElementById('resource-hits')) {

  const resource_search = instantsearch({
    indexName: 'prod_resources',
    searchClient,
  });

  resource_search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 8,
    }),

    instantsearch.widgets.searchBox({
      container: '#resource-search',
    }),

    instantsearch.widgets.refinementList({
      container: '#resource-type',
      attribute: 'type',
    }),

    instantsearch.widgets.refinementList({
      container: '#resource-source',
      attribute: 'source',
    }),

    instantsearch.widgets.hits({
      container: '#resource-hits',
      templates: {
        item: `
         <div>
          <a class="flex text-centre m-0 bg-white border-solid border-gray-200 border rounded-sm shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}" data-ga-category="links" data-ga-action="internal link clicks" data-ga-label="events - {{ meta_title }} {{ event.host }}">
            <img src="/img/search-icons/{{ type }}.png" alt="{{ meta_title }}" width="100" />
            <div class="py-4 px-4 flex-grow">
              <div class="flex">
                <h2 class="text-base font-medium mt-0 mb-2 leading-tight flex-grow">{{ meta_title }}</h2>
                <p class="text-xs leading-tight m-0 mb-1 uppercase font-semibold">{{ type }}</p>
              </div>
              {{#label}}
                <span class="text-white font-medium bg-green-500 rounded-md py-1 px-2 inline-block uppercase text-xs leading-tight">{{ label }}</span>
              {{/label}}
              <p class="text-xs leading-tight m-0 md:pr-8">{{#helpers.snippet}}{ "attribute": "meta_desc" }{{/helpers.snippet}}</p>
            </div>
          </a>
        </div>
        `,
      },
    }),

    instantsearch.widgets.pagination({
      container: '#pagination',
    }),

  ]);

  resource_search.start();

}