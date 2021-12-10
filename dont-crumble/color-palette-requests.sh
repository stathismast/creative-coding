for i in {1..50}
do
  output=$(curl 'http://colormind.io/api/' --data-binary '{"model":"default"}' 2>/dev/null)
  output=${output:11:-2}
  echo "$output" | sed -r 's/[[]+/color(/g' | sed -r 's/],/), /g' | sed -r 's/]/)],/g' | sed 's/^/[/'
done