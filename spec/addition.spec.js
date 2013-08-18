define(['src/calculator'], function(calc){	
	describe('Addition', function(){
		it('should retrun 7 when adding 2 and 5', function(){

			var sum =  calc.add(2,5);
			expect(sum).toBe(7);

		});
	});
});