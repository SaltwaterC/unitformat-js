var unitformat = {
	
	core: function (value, unit, base, long_unit, decimals) {
		if (value < 1) {
			throw new Error('The input value must be at least 1.');
		}
		if (decimals == null) {
			decimals = 3;
		}
		var index = Math.floor(Math.log(value) / Math.log(base));
		var length = unit.length - 1;
		if (index > length) {
			index = length;
		}
		value = (value / Math.pow(base, index)).toFixed(decimals);
		if (long_unit == true && value == 1) { // Singularize
			unit[index] = unit[index].replace(/s$/, '');
		}
		return value + ' ' + unit[index];
	},
	
	bits: function (value, si, long_unit, decimals) {
		var unit = [];
		var base = 0;
		if (si == false) {
			if ( ! long_unit) {
				unit = ['bit', 'Kibit', 'Mibit', 'Gibit', 'Tibit', 'Pibit', 'Eibit', 'Zibit', 'Yibit'];
			} else {
				unit = ['bits', 'Kibibits', 'Mebibits', 'Gibibits', 'Tebibits', 'Pebibits', 'Exbibits', 'Zebibits', 'Yobibits'];
			}
			base = 1024;
		} else {
			if ( ! long_unit) {
				unit = ['bit', 'kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'];
			} else {
				unit = ['bits', 'Kilobits', 'Megabits', 'Gigabits', 'Terabits', 'Petabits', 'Exabits', 'Zettabits', 'Yottabits'];
			}
			base = 1000;
		}
		return convert.core(value, unit, base, long_unit, decimals);
	},
	
	bytes: function (value, si, long_unit, decimals) {
		var unit = [];
		var base = 0;
		if (si == false) {
			if ( ! long_unit) {
				unit = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
			} else {
				unit = ['Bytes', 'Kibibytes', 'Mebibytes', 'Gibibytes', 'Tebibytes', 'Pebibytes', 'Exbibytes', 'Zebibytes', 'Yobibytes'];
			}
			base = 1024;
		} else {
			if ( ! long_unit) {
				unit = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
			} else {
				unit = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Terabytes', 'Petabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];
			}
			base = 1000;
		}
		return convert.core(value, unit, base, long_unit, decimals);
	},
	
	microseconds: function (value, long_unit, decimals) {
		var unit = [];
		if ( ! long_unit) {
			unit = ['\u03bcs', 'ms', 's'];
		} else {
			unit = ['microseconds', 'miliseconds', 'seconds'];
		}
		return convert.core(value, unit, 1000, long_unit,  decimals);
	},
	
	miliseconds: function (value, long_unit, decimals) {
		var unit = [];
		if ( ! long_unit) {
			unit = ['ms', 's'];
		} else {
			unit = ['miliseconds', 'seconds'];
		}
		return convert.core(value, unit, 1000, long_unit,  decimals);
	}
	
}
