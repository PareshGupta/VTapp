class String

  def get_characters_count_hash
    characters = Hash.new(0)
    each_char do |character|
      case(character)
        when('a'..'z') then characters["Lowercase"] += 1
        when('A'..'Z') then characters["Uppercase"] += 1
        when('0'..'9') then characters["Digits"] += 1
        else characters["Special Characters"] += 1
      end
    end
    characters
  end

end