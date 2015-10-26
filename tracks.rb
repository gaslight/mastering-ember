
dirname = ARGV[0]
album = ARGV[1]
start_from = ARGV[2].to_i
Dir.entries(dirname).each do |f|
  next if File.directory?(f)
  track, title = f.match(/(\d+)-(.*)\.mp3/).captures
  title = title.split("-").map(&:capitalize).join(" ")
  puts <<-EOL
  {
    id: #{start_from},
    album: #{album},
    sequence: #{track.to_i},
    duration: 30,
    name: "#{title}",
    audioUrl: "#{dirname.gsub("public", "")}#{f}"
  },
EOL
  start_from += 1
end
