# **Welcome to my Personal Blog!**

### I am a Computer Science student which explains why I'm using Github as the vessel of my personal blog. In Github I am able to upload my personal software projects, code, and games.

<ul>
	{% for post in site.posts %}
		<li>
			<a href="{{ post.url }}">{{ post.title }}</a>
		</li>
	{% endfor $}
</ul>
