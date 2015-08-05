using Distributions
using JSON

a = 0
b = 1
d = Uniform( a,b )

x = [ -5, -2.5, 0, 2.5, 5 ]

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("a", a),
	("b", b),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/number.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
