def is_anagram(s, t)
  #easy check to eliminate strings of different lengths so there is no iteration
  return false if s.length != t.length
  # count each letter in s and see if same number of letters in t
  for i in 'a'..'z'
      if s.count(i) != t.count(i)
          return false
      end
  end
  return true
end

# contraints said all strings are lowercase, or would have to adapt solution a bit
# an easy change would be to just convert both inputs to lowercase or uppercase using .upcase
