# pallindrome
word=input()
word=list(word)
actual=word
word=word[::-1]

if(actual==word):
    print('pallindrome')
else:
    print('not pallidrome')
