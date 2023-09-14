word=input()
count_words=list(word.split())
st1=set(count_words)
print(f'The number of words in sentence is {len(st1)}')

count_letters=list(word)
st=set(count_letters)
print(f'The  number of letter is  {len(st)-1}')
