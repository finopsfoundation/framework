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
          <a class="m-0 p-6 w-full bg-white border-solid border-gray-200 border rounded-lg shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
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
            <a class="m-0 p-6 w-full bg-white border-solid border-gray-200 border shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
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
            <a class="m-0 p-6 w-full bg-white border-solid border-gray-200 border shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
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
             <a class="m-0 bg-gray-200 border-solid border-gray-200 border shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
              <img src="https://via.placeholder.com/300x200.png" />
              <div class="p-4">
                <h2 class="text-base font-medium mt-0 mb-2">{{ meta_title }}</h2>
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
            <a class="m-0 p-6 w-full bg-white border-solid border-gray-200 border shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ url }}">
              <h2 class="text-lg font-medium mt-0 mb-2">{{ name }}</h2>
            </a>
          `,
          },
        }),
      ]),

  ]);

  search.start();

}