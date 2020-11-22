word = input()
t,i = 0,0
list=[]
while i < len(word):
  if word[i] ==' ':
    list.append(int(word[t:i]))
    t = i
  i = i + 1
  if i == len(word):
    list.append(int(word[t:]))
n,m,a,t=list[0],list[1],list[2],1
if n % a == 0:
  t = n / a
else:
  t = int(n/a)+1
if m % a == 0:
  t = t*(m/a)
else:
  t = t*(int(m/a)+1)
print(int(t))
