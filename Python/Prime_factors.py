

num=int(input())

i=2
while i*i<=num:
    if num%i==0:
        print(i)
        num//=i
    else:
        i+=1

if num>1:
    print(num)
