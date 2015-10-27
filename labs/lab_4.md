# Albums Route

We now want to show a list of albums for each artist along with a table containing each associated tracks. Run `git
chechout lab-4`, and visit [localhost:4200/tests](http://localhost:4200/tests) to see the failing tests.

The tracks table should have rows like this:

```hbs
<tr>
  <td>{{track.sequence}}</td>
  <td>{{track.name}}</td>
  <td>{{track.duration}}</td>
</tr>
```

