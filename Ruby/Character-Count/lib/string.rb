class String

  def count_characters(text)
    characters = Hash.new(0)
    text.each_char do |c|
      case(c)
        when('a'..'z') then characters["Lowercase"] += 1
        when('A'..'Z') then characters["Uppercase"] += 1
        when('0'..'9') then characters["Digits"] += 1
        else characters["Special Characters"] += 1
      end
    end
    characters
  end

end

