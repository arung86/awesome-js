##Array instance inhirit from Array.prototype. As with all constructors, you can change
 # the cunstructors prototype object to make changes to all array Instances.
 # For instance you can add new methods and properties to extend all array objects.
 # this is used for polyfilling, for example
 # polyfilling => ## https: //developer.mozilla.org/en-US/docs/Glossary/Polyfill 
 #

## polyfilling  Array.prototype itself is an Array #/

##Properties 
## Array.prototype.constructor
 # Specifies the function that creates an object 's prototype.
 # 
 # Array.prototype.length => Reflects the number of elements in an array.
 # Array.prototype [@ @unscopables] => The @ @unscopable symbol property contains property names that were
 #  not included in the ECMAScript standard prior to the ES2015 version.
 #  These properties are excluded from with statement bindings.
 #


##The @@unscopables symbol (Symbol.unscopables) can be defined on any 
 # object to exclude property names from being exposed as lexical variables 
 # in with with environment bindings. Note that if using Strict mode, with statements
 # are not available and will likely also not need this symbol. 



##Setting a property to true in an unscopables object will make it
 # unscopable and therefore it won't appear in lexical scope variables. 
 # Setting a property to false will make it 
 # scopable and thus it will appear in lexical scope variables. Example in 22

##Property attributes of Symbol.unscopables
# Writable	    no
# Enumerable	no
# Configurable	no
## Examples is in Array.prototype.@@unscopable.js line 44

 