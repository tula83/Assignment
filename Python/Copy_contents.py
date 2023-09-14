path1='C:\\Users\\VMAdmin\\Documents\\first.text'
path2='C:\\Users\\VMAdmin\\Documents\\second.text'

with open(path1,'r') as file1:
    f2=file1.read()
    with open(path2,'w') as file2:
        file2.write(f2)
        file2.close()
    file1.close()


