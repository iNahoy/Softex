def insertionSort(array):
    for passo in range (1, len(array)):
        y = array[passo]
        j = passo - 1
        while j>=0 and y<array[j]:
            array[j + 1] = array [j]
            j = j-1
        array[j+1] = y
num = [473,5,9,1,3,7,11,17,19,999,13,25,27,23,33,39,29,57,49,43,41,59,73,113,201,103,891,15,223,21]
insertionSort(num)
print ("Em ordem crescente:")
print (num)