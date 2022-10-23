def bs (exec):
    for x in range(len(exec)-1):
        for y in range (len(exec)-1):
            if exec[y] > exec[y+1]:
                exec[y], exec[y+1] = exec[y+1], exec[y]
exec = [12,13,22,777,52,69,21,46,122,456,762,360,1,20,40,10,30,60,50]
bs(exec)
print(exec)