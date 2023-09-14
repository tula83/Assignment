import sys
arr=list(map(int,input().strip().split()))
max_value=-999999
for x in arr:
    if x > max_value:
        max_value=x
print(f'maximum value in list is {max_value}')
