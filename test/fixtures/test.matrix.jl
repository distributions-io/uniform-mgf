using Distributions
using JSON

a = 0
b = 1
d = Uniform( a,b )

x = linspace( 1, 0, 25 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("a", a),
	("b", b),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/matrix.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
