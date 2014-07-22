require 'date'
require_relative '../lib/time_error.rb'

class Time
  CHECK_TIME_REGEX = /(^([0-1]?\d|2[0-3]?)\:([0-5]?\d)\:([0-5]?\d)$)/

  def self.sum(time1, time2)
    time1, time2 = parse(time1), parse(time2)
    calculate_total_units(time1, time2)
    extra_minutes, @@seconds = @@total_seconds.divmod(60)
    @@total_minutes += extra_minutes
    extra_hours, @@minutes = @@total_minutes.divmod(60)
    @@total_hours += extra_hours
    @@day, @@hours = @@total_hours.divmod(24)
    display
  end

  def self.valid?(time)
    CHECK_TIME_REGEX === time
  end

  def self.parse(time)
    if valid?(time)
      time = DateTime.parse(time)
    else
      raise TimeError, 'Invalid Time'
    end
  end

  def self.calculate_total_units(time1, time2)
    @@total_hours = time1.hour + time2.hour
    @@total_minutes = time1.minute + time2.minute
    @@total_seconds = time1.second + time2.second
  end

  def self.display
    if @@day == 0
      "The total time is #{ @@hours }:#{ @@minutes }:#{ @@seconds }"
    else
      "The total time is #{ @@day } day and #{ @@hours }:#{ @@minutes }:#{ @@seconds }"
    end
  end

  private_class_method :valid?, :parse, :calculate_total_units

end
