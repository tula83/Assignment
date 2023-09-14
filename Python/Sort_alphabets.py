alphabets=list(input().strip().split())

for i in range(0,len(alphabets)):
    for j in range(i+1,len(alphabets)):
        if alphabets[i] > alphabets[j]:
            alphabets[i],alphabets[j]=alphabets[j],alphabets[i]

print(alphabets)
