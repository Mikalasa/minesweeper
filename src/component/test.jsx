import React, { useState } from 'react';

function Test ()  {
    var initialArray = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    initArray()

    const [array, setArray] = useState(initialArray);

    function initArray() {
        var a = []
        for (let i = 0; i < 3; i ++) {
            a.push(i)
        }
        initialArray = a
    }
    const replaceArray = (newArray) => {
        // 使用传入的新数组替换整个二维数组
        setArray(newArray);
    };

    var newArray = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    console.log('array: ', array, 'array.length: ', array.length)

    return (
        <div>
            <button onClick={() => {replaceArray(newArray)}}> </button>
        </div>
    );
};

export default Test;