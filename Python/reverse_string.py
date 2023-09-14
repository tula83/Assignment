# reverse the string
a=input('enter a string')
a=list(a.strip())
a=a[::-1]
ans=a[0]
for i in range(1,len(a)):
    ans+=a[i]

print(ans)
