require 'date'

class Time
  CHECK_TIME_REGEX = /(^([0-1]?\d|2[0-3]?)\:([0-5]?\d)\:([0-5]?\d))/  # apply regex to validate time

  def sum_each_unit(time)
    @total_seconds, @total_minutes, @total_hours = 0, 0, 0
    for i in 0...time.length do
      if(time[i].match(CHECK_TIME_REGEX))
      @total_hours += time[i].hour
      @total_minutes += time[i].minute
      @total_seconds += time[i].second
      puts "#{@total_hours}:#{@total_minutes}:#{@total_seconds}"
    end
  end
  # refactor the code to calculate time
  def calculate_total
    extra_minutes = @total_seconds / 60
    seconds = @total_seconds % 59
    @total_minutes += extra_minutes
    extra_hours = @total_minutes / 60
    minutes = @total_minutes % 60
    @total_hours += extra_hours
    hours = @total_hours % 24
    days = @total_hours / 24
    "The total time is #{ days } days and #{ hours }:#{ minutes }:#{ seconds }"
  end

end
