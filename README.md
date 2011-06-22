## About

JavaScript unit formatter. Has methods for formatting: bits, bytes, microseconds, miliseconds.

## How to use

unitformat.bits(10000) => 10 Kbit (Kilobits)
unitformat.bytes(10000) => 10 KB (Kilobytes)
unitformat.microseconds(10000) => 10 ms (miliseconds)
unitformat.miliseconds(10000) => 10 s (seconds)

## Reference

 * bits(value, si, long_unit, decimals)
 * bytes(value, si, long_unit, decimals)
 * microseconds(value, long_unit, decimals)
 * miliseconds(value, long_unit, decimals)

value = the value to be formatted.
si = flag for enabling the SI notation for bits / bytes. On by default. If SI is on, the order of magnitude has the powers of 10, otherwise, the powers of 2.
long_unit = flag for enabling the printing of long units names. Off by default.
decimals = the number of decimals to print for the converted and formatted value.
