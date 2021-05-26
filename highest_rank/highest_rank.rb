#Complete the method which returns the number which is most frequent in the given input array. 
#If there is a tie for most frequent number, return the largest number among them.
def highest_rank(arr)
  #make a unique array so that I am not checking the same number multiple times
  unique = arr.uniq
  res = []
  #check count the instances of each number in the original array and
  #create a hash with the count of instances, and the number.
  unique.each do |n|
    res.push({arr.count(n)=>n})
    end
  # sort by the count and value, and grab the last result as it will be the highest count
 res.sort_by!(&:first)
return res[-1].first[1]
end