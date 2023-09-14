class Student:
    def __init__(self,name,age,location):
        self.name=name
        self.age=age
        self.location=location

    def print_number(self):
        pass


class AadharCard(Student):
    def __init__(self,name,age,location,id2):
        super().__init__(name,age,location)
        self.aadharid=id2

    def print_number(self):
        return self.aadharid

class Pancard(AadharCard):
    def __init__(self,name,age,location,aadharid,panid):
        super().__init__(name,age,location,aadharid)
        self.panid=panid

    def print_number(self):
        return self.panid

s1=Pancard('tularam',23,'up','2324','gi88')

print('pan number is ',s1.print_number())
