(function(){

    //captures the input from add project
    document.querySelector('#categoryInput').addEventListener('keydown', function(e){
        if(e.keyCode != 13){
            return;
        }

        e.preventDefault()

        var categoryName = this.value
        this.value = ''
        addNewCategory(categoryName)
        updateCategoriesString()
    })

    function addNewCategory(name){
        document.querySelector('#categoriesContainer').insertAdjacentHTML('beforeend', 
        '<li class ='category'>
        <span class='name'>${name}</span>
        <span onClick='removeCategory(this)' class='btnRemove bold'>X</span>
        </li>')
    }


})()

// gets categories

function fetchCategoryArray(){
    var categories = []
    document.querySelectorAll('.category').forEach(function(e){
        name = e.querySelector('.name').innerHTML
        if (name == '') return;

        categories.push(name)
    })
    return categories
}

// updates the category
function updateCategoriesString(){
    categories = fetchCategoryArray()
    document.querySelector('input[name="categoriesString"]').value = categories.join(',')
}

//removes categories
function removeCategory(e){
    e.parentElement.remove()
    updateCategoriesString()
}