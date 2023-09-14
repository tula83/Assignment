class Employee:
    def __init__(self, id, name, track_name) -> None:
        self.id = id
        self.name = name
        self.track_name = track_name

    def track_name(self):
        pass


class Manager(Employee):
    def __init__(self, id, name, track_name) -> None:
        super().__init__(id, name, track_name)

    def track_name(self):
        return self.track_name


class Supervisor(Manager):
    def __init__(self, id, name, track_name) -> None:
        super().__init__(id, name, track_name)

    def track_name(self):
        return super().track_name()


class Software_Engineer(Supervisor):
    def __init__(self, id, name, track_name) -> None:
        super().__init__(id, name, track_name)

    def track_name(self):
        return super().track_name()


s1 = Software_Engineer(133, 'John  luther', 'Developer')
print(s1.track_name)

supervisor1 = Supervisor(122, 'Misa ', 'Developer')
