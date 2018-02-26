module.exports = function solveEquation(equation) {
  // your implementation
  var discr;
  var sol = [];
  var a,b,c;
  var rex1 = /^-?[0-9]+/;
  var rex2 = /[\+|-]{1}\s[0-9]+\b/;
  var rex3 = /[\+|-]\s[0-9]+$/;

  a = equation.match(rex1);
  b = equation.match(rex2)[0].replace(/\s/, "");
  c = equation.match(rex3)[0].replace(/\s/, "");
  

  a = parseInt(a,10);
  b = parseInt(b);
  c = parseInt(c);


  discr = b * b - 4 * a * c;
  
  if (discr < 0) {
    return 0;
  } else if (discr == 0) {
    sol[0] = Math.round( -b/(2*a) );
    
    return sol;
  } else if (discr > 0) {
    sol[1] =(-b + Math.sqrt(discr)) / (2 * a) ;
    sol[0] = (-b - Math.sqrt(discr)) / (2 * a) ;
    
    if ( a > 0) {
      sol[1] = (-b + Math.sqrt(discr)) / (2 * a);
      sol[0] = (-b - Math.sqrt(discr)) / (2 * a);
    } else if (a <0) {
      sol[0] = (-b + Math.sqrt(discr)) / (2 * a);
      sol[1] = (-b - Math.sqrt(discr)) / (2 * a);
    }
    sol[0] = Math.round(sol[0]);
    sol[1] = Math.round(sol[1]);
    return sol;
  }
  
}
