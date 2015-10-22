export default function() {
  this.get('/api/artists', function(db) {
    return {
      artists: db.artists,
      albums: db.albums
    };
  });

  this.get('/api/artists/:id', function(db, request) {
    let artist = db.artists.find(request.params.id);
    return {
      artist: artist,
      albums: db.albums.where({ artist: artist.id })
    };
  });
}
