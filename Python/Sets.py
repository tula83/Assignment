st={'c','c++','java','python'}
st.add('javascript')
st.remove("c")
if 'python' in st:
    print('yes')
else:
    print("no")

second_set={'c','c++','react','node js','html','sql'}

print(st.intersection(second_set))
