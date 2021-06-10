{% assign is_events = false %}

{% for event in site.data.events %}
    {% if forloop.first == true %}
## Latest Events	
    {% endif %}
    {% assign is_events = true %}
<h3>{{ event.title }}</h3>
{{ event.details }}
	{% if event.sponsor %}
Sponsored by {{ event.sponsor }}
	{% endif %}  
<a href="{{ event.url }}">Event details</a> 

---   

{% endfor %}
{% if is_events == false %}
There are no current events scheduled
{% endif %}