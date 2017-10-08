/*checkerboard
<script>
const repeat = function(str, num)
const check = function(n) {
    const line = function(str, n){
      if (n < 1) {
        return;
      }
      if (n%2 === 0) {
        console.log(str);
      } else {
        console.log(" " + str);
      }
       line(str, n-1);
    };
     line(repeat("* ", n), n);
};
</script>
*/
/*
reverse
<script>
function reverse(str) 
  {
    if(str.length === 1) {
      return str;
    }
    const last = str[str.length - 1];
    str = str.substring(0, str.length-1);
    return last + reverse(str);
  }
</script>
*/
/*
triangle
<script>
const space = function (spc) {
	if(spc === 0) {
		return ""}
		return " " +space (spc-1);
	};
	const star = function (str){
		if (str === 0) {
			return "";}
			return "*" + star(str-1);
		};
		const add = function (n,spc,str) {
			if(n===0) {
				return " ";}
				console.log(space(spc)+star(str))
			add(n-1,spc-1,str+2);
		}
		const triangle = function(n)
		{
			add(n,n-1,1)
		};
		triangle(5);
</script>
*/