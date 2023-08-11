import math as math
from collections import deque

null = None;
print(null)
No = 0


# In python, Increment Like
def increment(No=0):
    No += 1  # Allowed
    No = No + 1  # Allowed
    # No ++              # Not Allowed


# Performing dividing Opertions
def divider():
    print(10 / 4)  # Give a float value
    print(10 // 4)  # Down  the No
    print(-10 / 4)  # give -2.5
    print(-10 // 4)  # give -3
    # To avoid that
    print(int(-10 / 4))


# In case of find Reminder
def remainder():
    print(10 % 3)  # give 1
    print(-10 % 3)  # give 2
    # To avoid that use math mode func
    print(math.fmod(-10, 3))  # give -1


# More math helper Functions
def math_helper():
    print("==============")
    print(math.floor(10 / 4))  # lower val
    print(math.ceil(10 / 4))  # Upper Val
    print(math.pow(2, 10))  # return Power


# Python infinite Func ("inf", "-inf")
def infintiy():
    float("inf")
    float("-inf")
    print(math.pow(2, 500))  # 150 additional digits
    print(math.pow(2, 500) < float("inf"))


# Arrays
## As Arrays are dynamic in Python can be used as a Stack as well.
def Arrays(arr=[1, 2, 3]):
    # Implementing Stack  (LIFO)
    arr.append(4)  # add at end      O(1)
    arr.pop()  # Pop from last   O(1)

    # Array Manipulation
    arr.insert(1, 10)  # O(n)
    arr.pop(1)  # Pop from index 1,  O(n)

    print(arr * 2)  # Guess what it will give.
    print(f'{arr[:-1]} {arr[:]}  {arr[::-1]}')

    #  Array Unpacking
    a, b, c = arr    # No of var same as element in array
    print("{} {} {} ".format(a, b, c))

    # Array Sorting Custom Sort
    List = ["Alice", "Bob", "John"]
    List.sort(key=lambda x: len(x), reverse=True)  # sort on bases of len in reverse Order.
    print(List)


# Array or List Comprehension
def Comprehension(arr=[i + i for i in range(4)]):
    print(arr)
    Two_D_Array = [[0] * 4 for i in range(4)]
    print(Two_D_Array)

    ### Similarly,
    arr_2d = [[0] * 4] * 4  # Solve on Paper
    print(arr_2d)


# Some most imp concepts array are ZIP, enumerate.


# Strings
def strings(City="LHR"):
    # Strings are Immutable
    # City[0] = "l"   # Throw Error

    # Appending New string at end of existing String. Create New String.
    City += ", Punjab"  # O(N)
    print(City)
    # TypeCasting in Strings Learn by self

    # To get ascii value in of a Char
    print(ord("d"))

    # To join elements in List
    List = ["ac", "bc", "nbc"]
    print(" ".join(List))  # Join every Element with a Space.


def queues():
    queue = deque()
    # Advantage is that appending and popping at left is O(1)
    queue.appendleft(20)
    queue.append(2)  # O(1)
    queue.appendleft(13)  # O(1)

    queue.pop()  # O(1)
    queue.popleft()  # O(1)

    print(queue)



# HashSets
def hash_set():
    Set = set()
    Set.add(20)       # O(1)
    Set.add(32)

    # Set.add(set([1, 3, 56, 65]))   # Not work
    # === Set Comprehension ===
    Set = Set.union({i for i in range(5)}) # deep Copy, Concat two set.    # Incase of n elements in array and we are adding m elements more than Time Complexity will be O(n + m)

    Set.remove(2)            # O(1)
    print(Set)


# HashMap
def hash_map(Student = {}):
    Student["Hamid"] = 23
    Student["Hassan"] = 21
    Student["Ali"] = 20

    print("Sakib" not in Student)

    for key, value in Student.items():
        print(key, value)




#  Tuples,  As immutable
def tuples():
    # Using tuple as key for hashMap
    hash_map = {}
    hash_map[(2,1)] = 3
    hash_map[("13","Hassan")] = "13Hassan"

    print((2,1) in hash_map)
    # Not we cannot assign List as key in hashmaps and set.
    mySet = set()
    mySet.add((13, 13))

    print(hash_map ,"  ", mySet)





if __name__ == '__main__':
     tuples()
