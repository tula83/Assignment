list1=list(map(int,input().strip().split()))
list2=list(map(int,input().strip().split()))


ans=list()
for x in list1:

     for  y  in list2:
         if y==-1:
             continue
         if x==y:
             ans.append(x)
             y=-1
             break

print(ans)
