# variable with var and func declaration will be put in the top of programm

# the difference between let and var
-the scope of var was set the whole env
-the scope of let was set stricterly for the rest of the code not before

-var alow for variables were declared more than one time 
-let only for onetime 

# Hosting

# bisic types of data in JS
- boolean
- interger number 
- decimal     12e-4 mean 12x10^-4
- string        
- array 
- NaN       not a number
- null        no value for object
- undefined   for normal variable
- object 

# operator
    math
        + - * / ** % 

        += -+ *= /+ **= %=

        --a ++a a-- a++
    compare
        == === 
        != !==
        => <= >=

    logical
        or ||
        and &&
        not !


# method with string 
-- concat() comebine 2 string together 
vd "ngo chi bao".concat(" rat ngu") >>>>> ngo chi bao rat ngu

-- indexof("str") the number presented for the first "str" start            ( lastIndexOf() )
vd "ngo chi bao".indexof("str) >>>>> 0

-- replace(str1, str2) str1 need to be replaced by str2

-- slice(start, end) extract a part of a string to another new string

-- split(what) from string to array of substring divided by What   <> join()
-- trim()
-- toString()
-- toUpperCase() ~ toLocateUpperCase()
-- toLowerCase() ~ toLocateLowerCase()
-- charAt() the character at that position
-- charCodeAt() the unicode of at character
-- .length

# array

-- push() <> pop() from the end of array
    pop() return thing was removed
    push() return the position

-- shift() <> unshift() from the front of array
    shift() return thing was removed
    unshift() return the position

-- splice(position, how many el, value)
-- concat() 

-- entries()      use       Object.entries(arr or obj)
-- forEach()
    forEach((element, index, array) => {....}, this arg)
    this arg is a object parameter, and use as this in the call back func. however if use arrow it has no  effect
    u need bind() to cover

-- filter()
    filter((element, index, array) => {.... return}, this arg)

-- every()
    every((element, index, array) => {....return})
    return true or false

-- fill()
    fill(value, start, end) fill by one value

-- find() 
    find(element, index, arr) => { ...return})
    callback func will be called for each element untill to find truly value

-- findIndex()
    findIndex(element, index, arr) => { ...return})
    gonna like find() method but return posotion first
-- keys() not a callback func
-- map() has callback func
    map((element, index, arr) => {.... return})

-- reduce((accumulator, currentValue, index, arr) => {

})

# function
** function declaration
    can be accessed any where in scope
** function expression
    can be accessed after declared
** arrow function
    - not have own "this"
** nested functions and closures
** defined parameter
** not limit parameter

# logic statement

-- if (condition) {
        code    
    } else {

    }

-- && chosing element to -->

-- || chosing element from <--

-- switch(condition) {
    case contidtion: 
        ...
        break;
    case contidtion: 
        ...
        break;
    case contidtion: 
        ...
        break;
    case contidtion: 
        ...
        break;
    default: 
        ...
}

# loop statement

** while (condition) {
        ...
    }

** do {
        ...
    } while

** for (var i = 0, condition , i++) {
        ...
    }

** for ... in (with obj)

** for ... of (with arrays)

** break / continue statements

** label used combining with break and continue in mutiple loop (a prefixing)

# Object

** type 1: 
    let obj1 = new Object()
    obj1.name = "ngo bao"              properties
    obj2.age = 13
    obj3.sua = function() {            method
        ...
    }

** type 2:
    let obj1 = {
        name: "ngo bao",
        age: 12,
        sua: () => {
            console.log("dit me may")
        }
    }

** function-constructor 
    function Bao(properties) {
        this.name = property
        this.age = property
        this.sua = function() {
            console.log("say something");
        }
    }

    let obj1 = new Bao("ngo bao", 12)

** setter (not return)
    in obj
        set lang(a) {
            this.lang = a
        }
        
** getter (return)     can not send value
        ``
** delete

# Class 
    class ObjContructorName {
        contructor(parameters) {
            this.property = parameter
        }

        method1() {

        }

        method2() {

        }

        method3() {
            
        }
    }



# DOM
+ getElementById()
+ getElementsByClassName() ---- live HTML collection
    it may be called in any elements, it will return only elements which are descendants of the specified root element with the given class name (s)
    it also can be searched both class at a same time



+ getElementsByTagName() ---- live HTML collection
    there is no need to call with the same element and arguments repeatedly if the DOM changes in between calls
    this method will lower-cases the argument before seacrching for it. this is undesirable when trying to match camel-cased SVG elements in an HTML
    * instead, use  
        Element. getElementsByTagNameNS() to preserve capitalize


+ querySelector() 
    return the first Ele within the document that matches the specified selector, or group od selectors. if no match are foudn , null is returned

    the matching is done using depth-first pre-order traversal of the document's starting with the element in the document's markup and iterating through sequential node by order of the number of the child nodes

+ querySelectorAll() a static HTML collection

    ** parameter string will be passed in querySelector() or querySelectorAll() needed to be confront with CSS standard

+ getAttribute(domString)
+ setAttribute(domString, domString)

+ innerText()           FAKE
+ textContent()         REAL

+ innerHTML()
+ outerHTML()

+ node properties
+ dom css   element.style
+ classList  >  DOMTokenList
    * add              can not be executed on mutiple string-class
    * contains
    * remove
    * toggle

+ preventDefault
+ stopPropagation

+ dom event
+ addEventListener(name, func, useCapture)
+ removeEventListener()


# PROMISE
    ++ var promise = new Promise() {
        function(resolve, reject) {
            resolve(suc);          // success
            reject(fai);           // failure
        }
    }
    
    promise
        .then((suc) => {
            ...             // neu return Promise must wait               
            return data;
        })  
        .then((data) => {
            ...
        })
        .catch((fail) => {
            ...
        }) 
        .finally(() => {
            ...
        });

    ++ function pro() {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        })
    }

    pro()
        .then()
        .catch()

    ++ Promise.resolve
    Promise.reject
    Promise.all(array of promise)

    ++ async await

# module

# fetch