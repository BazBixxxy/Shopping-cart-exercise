# Shopping-cart-exercise

Expected outcome?

> When the user enters an item and clicks enter, the item should be displayed below in an unorderly list and a delete button.
> The should be able to delete an item by clicking the delete button.

What I have done in the code.

> In the code, am trying to achieve it by creating the html for the item in the an pushing it to an array so that I could list and delete it using a loop.

I need help with an easier way to enter and list the inputs and then be able to delete them

Solution:
The HTML rendering algorithm;

1.  Create an array to store the value inputs of the user.
2.  Create a function to add and display the content entered by the user.
    Function:

    > create variables to store the input elements of the user.
    > create variables to store the input values of the user(.value)
    > push the values to the array inform of an object (array.push({name: input.value, age: age.value}))
    > Reset the input elements by setting the variable input.value to an empty string.
    > Then we call the renderHTML() function.

3.  We then call create a function to render our html.
    Function:

    > create an empty string variable i.e. (const cartHTML = '';)
    > we loop through our array:

        array.forEach((value, index)=>{
            const name = value.name; //to give our value names
            const date = value.date;
            //we then create some html to display these values
            const html = `
            <div>${name}</div>
            <div>${date}</div>
            <button
            onclick = "
            array.splice(${index}, 1) // at that index we remove one value
            renderHTML() // we call the render function to update it.
            "
            >Delete</button>
            `;
            cartHTML += html // to append each value separately.
        })

    > we then add the cartHTML to the display:

        [document.querySelector('.display').innerHTML = cartHTML;]

4.  We then add the an event listener to the required button.
