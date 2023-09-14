books={
    'psychology of money':"Morgan Housel ",
    'know your limits':"Johon Mason",
    "e myth":"Michael E. Gerber",
     "intelligent investor":"Benjamin Graham"
}

# add new  book
new={'think and grow rich':"Nepolean Hill"}
new_dict={**books,**new}

# update

new_dict['e myth']='anyone who contributed'
print(new_dict['e myth'])


# looping
for key,value in new_dict.items():
    print(f'title={key} : author name {value} ')
