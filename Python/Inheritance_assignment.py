class Vehicle:
    def __init__(self,make,model):
        self.make=make
        self.model=model

    def model_name(self):
        pass



class Car(Vehicle):
    def __init__(self,make,model,mileage):
        super().__init__(make,model)
        self.mileage=mileage

    def brand_name(self):
        return self.make


class Motorcycle(Vehicle):
    def __init__(self,make,model,mileage,engine_type):
        super().__init__(make,model)
        self.mileage=mileage
        self.engine_type=engine_type

    def brand_name(self):
        return self.make


maruti=Car('Maruti','Suzuki 800','14kmpl')
bike=Motorcycle('Bajaj','Pulsar 200','35kmpl','Petrol')


print(bike.brand_name())
