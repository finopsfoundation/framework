const searchClient = algoliasearch('64LMXTN0XN', '3b7af83f7cdd87204a4c8412426bd278');

const search = instantsearch({
  indexName: 'prod_capabilities',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#capability-search',
  }),

  instantsearch.widgets.hits({
    container: '#capability-hits',
    templates: {
      item: `
        <div class="m-0 p-6 w-full bg-white border-solid border-gray-200 border rounded-lg shadow-sm hover:border-green-500 cursor-pointer transition duration-200" data-url="{{ url }}">
          <h2 class="text-lg font-medium mt-0">{{ meta_title }}</h2>
          <p class="text-gray-600 text-sm leading-relaxed">{{ meta_desc }}</p>
          <a class="text-gray-600 hover:text-green-500 text-sm leading-relaxed underline" href="{{ url }}">Read more</a>
        </div>
      `,
    },
  })
]);

search.start();
