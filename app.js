// 1.Viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
// let n = prompt("nhập vào ");
// if(n.startsWith('java')){
//    console.log(n.startsWith('java'));
//   }
// else{console.log(n.startsWith('Sat', 3));
//     }

// 2  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
//   - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
//   - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
//   Example: 
//   [1, -10, 5, 18, -9, 5] => 27

   
/*

  function findMaxDiff(arr) {

    if(arr.length<2)
      return 0;
    else{
        let maxDiff=0;
        for(let i=1;i<arr.length;i++)
          maxDiff=(maxDiff<Math.abs(arr[i]-arr[i-1]))
          ? Math.abs(arr[i]-arr[i-1])
          : maxDiff;
        return maxDiff;
    }
  }
  console.log(findMaxDiff([1, -10, 5, 18, -9, 5]))
 */

//   3.viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
//   Tham số:
//   - array: mảng gốc
//   - n: số phần tử trả về

      //   function first(array, n) {
      //    if(n===0)
      //   return [array[0]];
      //      else if(n<=0)
      //        return [];
      //     else if(n<=array.length)
      //          return array.splice(0,n);
      //      else return array;
      // }
      //     console.log(first([3, 20, 5, 28, -6, 5],4))
    //4. Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
    // Nếu có 1 số âm và một số dương thì trả về true. 
    // Các trường hợp khác trả về false. 
    // Số 0 là số không âm cũng không dương
    // Tham số:
    //  - number1: số nguyên thứ nhất
    // - number2: số nguyên thứ hai
 
    // function checkInt(number1, number2) {
    //     return (number1*number2<0)
    //       ?true
    //       :false;
    //   }
    //       let number1 = Number(prompt('Enter Number 1:'));
    //       let number2 = Number(prompt('Enter Number 2:'));
    //       if(checkInt(number1,number2)){
    //        console.log('true');
    //      }else console.log('false');

    // 5.Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu số đó và 13, 
    // nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
    // Example: 
    // n = 20 // return 14
    // n = 5 // return 8

    // let n = prompt("nhập số :");
    // function ham(n) {
    //     return (n>13)
    //      ? Math.ham((n-13))*2
    //      :Math.ham(n-13);
    //   }
    //   console.log(ham(n));

    // 6.Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số
    // Input: là một dãy số.
    // Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.
    // Ví dụ:
    // Input: [1, 2, 3, 8, 9]
    //Output: 8 (là hiệu của 9 và 1)
        
    // function ham(arr){
    //     let maxs=0;
    //     for(let i=0;i<arr.length-1;i++)
    //       for(let j=i+1;j<arr.length;j++)
    //        if(maxs<Math.abs(arr[i]-arr[j]))
    //          maxs=Math.abs(arr[i]-arr[j]);
    //     return maxs;
    //   }
    //   console.log(ham([5, 2, -5, 7, 3]))