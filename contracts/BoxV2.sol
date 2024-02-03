// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;



contract BoxV2  {
  uint public width;
  uint public length;

 function initialize(uint _length, uint _width) public {
    length = _length;
    width = _width;
  }

  function area() public view returns(uint) {
    return length * width;
  }

  function perimeter() public view returns(uint) {
    return length * 2 + width * 2;
  }
}