module.exports = function toReadable (number) {
  function x(num) {
		switch(num) {
			case '0':
				return 'zero';
			case '1':
				return 'one';
			case '2':
				return 'two';
			case '3':
				return 'three';
			case '4':
				return 'four';
			case '5':
				return 'five';
			case '6':
				return 'six';
			case '7':
				return 'seven';
			case '8':
				return 'eight';
			case '9':
				return 'nine';
			default:
				return '';
		};
	};
	
	let numberString = number.toString().split('').reverse(),
			readableString = [];
	for (let i = 0; i < numberString.length; i++) {
		
		if (i == 0) readableString.push(x(numberString[i]));
		
		if (i == 1) {
			if (numberString[i] == '1') {
				readableString.pop();
				if (numberString[i-1] == '0') readableString.push('ten')
					else if (numberString[i-1] == '1') readableString.push('eleven')
						else if (numberString[i-1] == '2') readableString.push('twelve')
							else if (numberString[i-1] == '3') readableString.push('thirteen')
								else if (numberString[i-1] == '5') readableString.push('fifteen')
									else if (numberString[i-1] == '8') readableString.push('eighteen')
										else readableString.push(x(numberString[i-1]) + 'teen')
			} else {
				if (numberString[i-1] == '0') readableString.pop();
				if (numberString[i] == '2') readableString.push('twenty')
					else if (numberString[i] == '3') readableString.push('thirty')
            else if (numberString[i] == '4') readableString.push('forty')
              else if (numberString[i] == '5') readableString.push('fifty')
                else if (numberString[i] == '8') readableString.push('eighty')
                  else if (numberString[i] !== '0') readableString.push(x(numberString[i]) + 'ty')
			};
		};
		
		if (i == 2) readableString.push(x(numberString[i]) + ' hundred')
	};
	return readableString.reverse().join(' ');
}
