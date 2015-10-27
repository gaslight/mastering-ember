# Building the artists navigation

For our first lab, we'll create a navigation menu that lists all artists along with their thumbnail image. To start, run
`ember serve` and visit [localhost:4200/tests](http://localhost:4200/tests). You should see a failing acceptance test
saying that there are no artist links on the page.

Open `/tests/acceptance/viewing-the-artists-nav-test.js`. Your task is to make the test pass.

You'll need to generate markup that looks like this:

```hbs
<div class="row">
  <div class="col-md-3">
    <a class="artist-link"}}
      <img src="artist-thumbanil.jpg"/>
      <h4>Arists Name</h4>
    </a>

    <a class="artist-link">
    ...
  </div>
</div>
```

You can use this to supply your template with data:

```js
[
  {
    id: 1,
    name: "The Beatles",
    thumbnailUrl: "/fixtures/test-thumbnail.jpg"
  }
]
```

