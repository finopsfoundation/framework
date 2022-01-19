const searchClient = algoliasearch('64LMXTN0XN', '3b7af83f7cdd87204a4c8412426bd278');

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

if(document.getElementById('resources-hits')) {

  const resources_search = instantsearch({
    indexName: 'prod_resources',
    searchClient,
  });

  resources_search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#resources-search',
    }),

    instantsearch.widgets.hits({
      container: '#resources-hits',
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

  resources_search.start();
}