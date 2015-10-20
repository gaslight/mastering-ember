export default function() {
  this.get('/api/artists', function(db) {
    return { artists: db.artists };
  });
}
