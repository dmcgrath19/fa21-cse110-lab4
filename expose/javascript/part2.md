1. Line 12 will print out '3' as that is the size of the prices array, which i will get to upon completing the loop.
2. Line 13 will print out "150" because that is the value of the last argument in the list after it has been given its new discounted price.
3. Line 14 will print out "150" because it is giving the last rounded discountedPrice, which was 150.
4. The function will return the adjusted prices after the discount of the items in the array.
5. A ReferenceError will return because defining i with let in the for loop makes it only accessible within the for loop.
6. A ReferenceError will return because discountedPrice is defined with let, which makes it only accessible within the for loop.
7. Line 14 will return "150" because the finalPrice was defined before the for loop with let, making it accessible after the for loop.
8. The function will return the adjusted prices after the discount of the items in the array.
9. Line 11 will return a ReferenceError because i is defined in the for loop with let, which makes it inaccessable outside of the for loop.
10. Line 12 will output "12" as the length was defined initally with const and did not throw any errors as it remained unchanged. 
11. The function will return the adjusted prices of the passed array. As the values are being pushed on, the const declaration is not an issue.
12. a. student.name
    b. student["Grad Year"] 
    c. student.greeting()
    d. student["Favorite Teacher"].name
    e. student.courseLoad[0]
13. a. 32 -- converts 2 to string and adds '3'
    b. 1 -- converts '3' to a number and subtracts
    c. 3 -- converts null to 0, then adds 3
    d. 3null -- converts null to string and adds it to '3'
    e. 4 -- converts true to 1 and adds to 3
    f. 0 -- converts false to 0 and null to 0, then adds
    g. 3undefined -- converts undefined to string and adds to '3'
    h. NaN -- converts 3 & undefined to numbers and subtracts; undefined in the arithmetic equation leads to the result of NaN
14. a. true -- 
    b. false --
    c. true -- 
    d. false --
    e. false --
    f. true --
15. The == checks for the equality using type conversion, while === checks for equality without using type conversion.
16. The resulting array would be [2,4,6] due to each value in the array having to call the function doSomething, which alters each value before pushing it onto the array. The array with the altered values would then be returned.
17. The result will be 1 4 3 2. This could be found by 