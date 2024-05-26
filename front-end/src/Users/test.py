# students = {
# 	"Rohan":{"score":87},
# 	"Rahul":{"score":60},
# 	"Vikram":{"score":50}
# }

# max = 0
# name =  ""
# for i in students:

#     if(students[i]["score"] > max):
#         max = students[i]["score"]
#         name = i


# print(name)        

# text = "Hey there my name is Nitin and I speak Malayalam"

# words = text.split(" ")

# for i in words:
    
#     # for j in range(0, int(len(i)/2)):
#     #     wordpal = True
#     #     if(i[j] != i[j]):
#     #       wordpal =   False
#     #       print(i[j])

#     #     if wordpal:
#     #         print(i)     
    

        

#     if(i.lower() == (i[:: -1 ]).lower() and len(i) != 1):
#         print(i)


# import requests        

# ul = "https://api.postalpincode.in/pincode/110001"

# res = requests.get(ul)

# if res.status_code == 200:
#     data = res.json()
#     print(data)

import requests 
  
url = "https://www.amazon.com/nothing_here"
  
try: 
    r = requests.get(url, timeout=1) 
    r.raise_for_status() 
except requests.exceptions.HTTPError as errh: 
    print("HTTP Error") 
    print(errh.args[0]) 
# Prints the response code 
print(r) 




